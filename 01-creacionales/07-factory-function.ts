/**
 * ! Factory Function
 * Es un patrón de diseño que nos permite crear objetos o funciones de manera dinámica que serán
 * usados posteriormente en el código.
 *
 * * Es útil cuando necesitamos crear objetos o funciones de manera dinámica,
 * * es decir, en tiempo de ejecución y no en tiempo de compilación.
 *
 */
type Language = 'es' | 'en' | 'pt';

//i18n
function createGreeter(lang: Language) {
  return function (name: string) {
    const messages = {
      es: 'Hola',
      en: 'Hello',
      pt: 'Olá',
    }

    return console.log(`${messages[lang]} ${name}`);
  };
}

function main() {
  const spanishGreeter = createGreeter('es');
  const englishGreeter = createGreeter('en');
  const portugueseGreeter = createGreeter('pt');

  spanishGreeter('Jorge');
  englishGreeter('Jorge');
  portugueseGreeter('Jorge');
}

main();