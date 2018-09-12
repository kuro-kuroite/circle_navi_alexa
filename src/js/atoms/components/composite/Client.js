import Composite from './Conposite';
import Leaf from './Leaf';

if (require.main === module) {
  console.log('client composite');
  const rootdir = new Composite('root');
  const bindir = new Composite('bin');
  const usrdir = new Composite('usr');
  const alicedir = new Composite('alice');
  rootdir.addCsomponent(usrdir);
  rootdir.addCsomponent(bindir);
  usrdir.addCsomponent(alicedir);

  alicedir.addCsomponent(new Leaf('.bashrc'));

  console.log(rootdir.operation());
}
