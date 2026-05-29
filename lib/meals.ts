import fs from 'node:fs';

import sql from 'better-sqlite3';
import slugify from 'slugify';
import xss from 'xss';

const db = sql('meals.db');

export async function getMeals() {
  await new Promise(resolve => setTimeout(resolve, 500));
  return db.prepare('SELECT * FROM meals').all();
}

export function getMeal(slug: string) {
  return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug);
}

export async function addMeal(meal: Omit<Meal, 'id'>) {
  const slug = slugify(meal.title, { lower: true });
  const instructions = xss(meal.instructions);

  const imageExtension = (meal.image as File).name.split('.').pop();
  const filename = `${slug}.${imageExtension}`;

  const stream = fs.createWriteStream(`public/uploads/${filename}`);
  const bufferedImage = await (meal.image as File).arrayBuffer();
  stream.write(Buffer.from(bufferedImage), error => {
    if (error) {
      throw new Error('Failed to save image');
    }
  });

  const image = `/uploads/${filename}`;

  const stmt = db.prepare(`
    INSERT INTO meals (slug, title, image, summary, instructions, creator, creator_email)
    VALUES (@slug, @title, @image, @summary, @instructions, @creator, @creator_email)
  `);
  const info = stmt.run({ ...meal, slug, image, instructions });
  return info.lastInsertRowid;
}
