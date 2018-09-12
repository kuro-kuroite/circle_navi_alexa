import ConcreteCreator from './ConcreteCreator';

if (require.main === module) {
  console.log('client factory method');
  const creator = new ConcreteCreator();

  console.log(creator.operation());
}
