import { execa } from 'execa';
import replaceInFile from 'replace-in-file';

const generate = async () => {
  await execa('tsc');

  await execa('git', ['config', '--global', 'user.name', 'FreePhoenix888']);
  await execa('git', ['config', '--global', 'user.email', 'freephoenix888@gmail.com']);

  await execa('npm', ['run', '--silent','library:build:generate-package-class']);

  await execa('git', ['add', './src/package.ts']);

  const { exitCode } = await execa('git', ['diff', '--staged', '--quiet'], { reject: false });

  if (exitCode === 0) {
    console.log("No changes to commit");
  } else {
    await execa('git', ['commit', '-m', 'Generate new package class']);
    await execa('git', ['push', 'origin', 'main']);
  }
};

generate().catch(error => console.error('Error occurred:', error));
