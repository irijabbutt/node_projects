import inquirer from 'inquirer';
import chalk from 'chalk';

async function main() {
    const answer = await inquirer.prompt([
        {
            type: 'input',
            name: 'paragraph',
            message: 'Enter a paragraph:',
        },
    ]);

    const paragraph = answer.paragraph;
    const words = paragraph.split(' ').filter((word: string) => word !== '');
    const charCount = paragraph.replace(/\s+/g, '').length;

    console.log(chalk.blue(`You entered: ${paragraph}`));
    console.log(chalk.green(`Word count: ${words.length}`));
    console.log(chalk.yellow(`Character count: ${charCount}`));
}

main();