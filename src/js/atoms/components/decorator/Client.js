import ConcreteComponent from './ConcreteComponent';
import ConcreteComponentDecorator from './ConcreteComponentDecorator';

if (require.main === module) {
  console.log('client decorator');
  const component = new ConcreteComponentDecorator(
    new ConcreteComponentDecorator(new ConcreteComponent())
  );

  console.log(component.operation());
}
