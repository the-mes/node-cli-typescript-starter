import chalk from 'chalk';

interface Params {
  readonly blue: boolean;
}

const example = ({ blue }: Params) => {
  if (blue) {
    return console.log(chalk.blue(`I'm blue, da ba dee da ba daa`));
  }

  console.log('Example message');
};

export default example;
