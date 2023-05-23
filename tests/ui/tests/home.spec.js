const { test, expect } = require('@playwright/test');

test('Has "Home" in title', async ({ page }) => {
	await page.goto('/');
	await expect(page).toHaveTitle(/Home/);
});

test('Can click on a recipe', async ({ page }) => {
	await page.goto('/');
	await page.getByRole('link', { name: 'Asian Crispy Beef' }).click();
});

test('Add a new todo', async ({ page }) => {
	await page.goto('/');

	const todo = 'New todo';
  //hello

	await page.getByRole('link', { name: 'To Do' }).click();
	await page.getByRole('button', { name: 'Add a Task' }).click();
	await page.getByLabel('Task Name').click();
	await page.getByLabel('Task Name').fill(todo);
	await page.getByLabel('Due Date').fill('2023-05-24');
	await page.getByRole('button', { name: 'Add', exact: true }).click();
});

test('Add new event in calendar', async ({ page }) => {
	await page.goto('/');

	const event = 'New event';

	await page.getByRole('link', { name: 'Calendar' }).click();
	await page.getByRole('button', { name: 'Add new event' }).click();
	await page.getByLabel('Event Name').click();
	await page.getByLabel('Event Name').fill(event);
	await page.getByLabel('Start Date').fill('2023-05-26');
	await page.getByLabel('End Date').fill('2023-05-27');
	await page.getByRole('button', { name: 'Add', exact: true }).click();
});
