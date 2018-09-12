import ConcreteHander from './ConcreteHandler';
import Event from './Event';

if (require.main === module) {
  console.log('client chain of responsibility');
  const handler1 = new ConcreteHander();
  const handler2 = new ConcreteHander();
  const handler = new ConcreteHander()
    .setSuccessor(handler1)
    .setSuccessor(handler2);
  console.log(handler.request_handle(new Event()));
}
