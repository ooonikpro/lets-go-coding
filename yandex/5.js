const example = {
  name: 'src',
  children: [
    { name: 'index.html' },
    { name: 'webpack.config.js' },
    { 
      name: 'assets',
      children: [
        { name: 'image_1.jpg' },
        { name: 'image_2.jpg' },
        { name: 'image_3.jpg' },
        { name: 'image_4.jpg' },
      ]
    },
    { 
      name: 'scripts',
      children: [
        { name: 'my-script.js' },
        { name: 'my-script.ts' },
      ]
    },
    { 
      name: 'node_modules',
      children: [
        { 
          name: 'package',
          children: [
            { 
              name: 'win32', 
              children: [
                { name: 'run.bin' }
              ] 
            },
            { 
              name: 'linux', 
              children: [
                { name: 'run.sh' }
              ]
            },
          ]
        },
      ]
    }
  ]
}


/**
 *  Написать функцию, которая выведет в консоль дерево всех файлов и папок с учетом вложенности
 *  
 *  Ограничения: нельзя использовать рекурсию
 */

const renderTree = (tree) => {
  const stack = [{ row: tree, lvl: 0 }];

  while(stack.length) {
    const { row, lvl } = stack.pop();

    console.log('|', '-'.repeat(lvl), row.name);

    const children = row.children ?? [];

    for(let i = children.length - 1; i >= 0; i--) {
      stack.push({ row: children[i], lvl: lvl + 2 });
    }
  }
}


renderTree(example);