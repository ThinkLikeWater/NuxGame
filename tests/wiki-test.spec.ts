import { test, expect } from '@playwright/test';
const USERNAME: string = process.env.USERNAME as string;
const PASSWORD: string = process.env.PASSWORD as string;

test('Change the language in Wikipedia account', async ({ page }) => {
  await page.goto('https://en.wikipedia.org/wiki/English_Wikipedia');
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.getByPlaceholder('Enter your username').fill(USERNAME);
  await page.getByPlaceholder('Enter your password').fill(PASSWORD);
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.getByRole('button', { name: 'Personal tools' }).check();
  await page.getByRole('link', { name: 'Preferences' }).click();
  await page.getByLabel('en - English').getByText('en - English').click();
  await page.getByRole('option', { name: 'egl - emiliàn e rumagnòl' }).click();
  await page.getByRole('button', { name: 'Save' }).click();
/**
 * Test is done, but in order to be able to run this multiple times, 
 * we need to change language back to English, so we have to do this 3 steps that's below.
 */
//
  await page.getByLabel('Léngua:').getByText('egl - emiliàn e rumagnòl').click();
  await page.getByRole('option', { name: 'en - English' }).click();
  await page.getByRole('button', { name: 'Salva' }).click();
});
