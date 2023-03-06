import Detail from '../view/pages/detail';
import Home from '../view/pages/home';
import Cat from '../view/pages/cat';
import Dog from '../view/pages/dog';
import About from '../view/pages/about';
import Lingkungan from '../view/pages/lingkungan';
import catHealth from '../view/pages/catHealth';
import catType from '../view/pages/catType';
import dogHealth from '../view/pages/dogHealth';
import dogType from '../view/pages/dogType';

const routes = {
  '/': Home, // default page
  '/home': Home,
  '/dog': Dog,
  '/cat': Cat,
  '/cathealth': catHealth,
  '/doghealth': dogHealth,
  '/detail/:id': Detail,
  '/about': About,
  '/lingkungan': Lingkungan,
  '/cattype': catType,
  '/dogtype': dogType,
};

export default routes;
