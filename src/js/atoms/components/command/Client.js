import ConcreteCommand from './ConcreteCommand';
import Reciever from './Reciever';

if (require.main === module) {
  console.log('client command');
  const command = new ConcreteCommand(new Reciever());
  command.execute();
}
