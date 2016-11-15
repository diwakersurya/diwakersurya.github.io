import Component1 from '../components/Component1';
import Component10 from '../components/Component10';
import Feature from '../containers/Feature';
const routes = {
	pattern: '/app',
	component: Feature,
	subRoutes: [
		{
			pattern: '/app/Component1',
			component: Component1
		}, {
			pattern: '/app/Component10',
			component: Component10
		}
	]
}
export default routes;
