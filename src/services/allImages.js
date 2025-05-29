const imageModules = import.meta.glob('../assets/*.{png,jpg,jpeg,svg}', {
  eager: true,
  import: 'default',
});

const allImages = {};

for (const path in imageModules) {
  // Extrai o nome do arquivo sem extensão
  const name = path
    .split('/')
    .pop()
    .split('.')
    .slice(0, -1)
    .join('.');

  allImages[name] = imageModules[path];
}

export default allImages;
