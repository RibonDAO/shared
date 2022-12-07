import glob from 'glob';

let modules;

try {
  const res = await glob(__dirname + '/**/*.ts');
  modules = Promise.all(res.map((file) => (
    import(file.replace(__dirname, '.').replace('.ts', ''))
  )));
} catch (err) {
  // handle `err`
}

// use `modules`