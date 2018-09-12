import ConcreteBuilder from './ConcreteBuilder';
import Director from './Director';

if (require.main === module) {
  console.log('client builder');
  const director = new Director(new ConcreteBuilder());
  const builder = director.construct();
  console.log(builder.result());
}
