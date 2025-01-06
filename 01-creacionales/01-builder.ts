class Computer {
  public cpu: string = 'cpu - not defined';
  public ram: string = 'ram - not defined';
  public storage: string = 'storage - not defined';
  public gpu?: string;

  displayConfiguration() {
    console.log(`Configuración de la computadora
      CPU: ${this.cpu}
      RAM: ${this.ram}
      Almacenamiento: ${this.storage}
      GPU: ${this.gpu}
      `);
  }

}


class ComputerBuilder {
  private computer: Computer;

  constructor() {
    this.computer = new Computer();
  }

  setCPU(cpu: string): ComputerBuilder {
    this.computer.cpu = cpu;
    return this; // Retornamos la instancia de la clase para poder encadenar los métodos
  }

  setRAM(ram: string): ComputerBuilder {
    this.computer.ram = ram;
    return this;
  }

  setStorage(storage: string): ComputerBuilder {
    this.computer.storage = storage;
    return this;
  }

  setGPU(gpu: string): ComputerBuilder {
    this.computer.gpu = gpu;
    return this;
  }

  build(): Computer {
    return this.computer;
  }
}

function main() {

  const basicComputer: Computer = new ComputerBuilder()
    .setCPU('i3')
    .setRAM('8GB')
    .setStorage('1TB HDD')
    .build();

  console.log('Computadora básica');
  basicComputer.displayConfiguration();
}

main();