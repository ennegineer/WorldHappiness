import { init } from '../serverless.js';

export const handler = init({
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["Inter-Regular.ttf","PlayfairDisplay-Medium.ttf","PlayfairDisplay-MediumItalic.ttf","favicon.png"]),
	mimeTypes: {".ttf":"font/ttf",".png":"image/png"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.bb7bcc2d.js","imports":["_app/immutable/entry/start.bb7bcc2d.js","_app/immutable/chunks/index.a7beb212.js","_app/immutable/chunks/singletons.10e16567.js","_app/immutable/chunks/paths.74c59e9b.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.1a1406f5.js","imports":["_app/immutable/entry/app.1a1406f5.js","_app/immutable/chunks/preload-helper.41c905a7.js","_app/immutable/chunks/index.a7beb212.js"],"stylesheets":[],"fonts":[]}},
		nodes: [
			() => import('../server/nodes/0.js'),
			() => import('../server/nodes/1.js'),
			() => import('../server/nodes/2.js'),
			() => import('../server/nodes/3.js'),
			() => import('../server/nodes/4.js'),
			() => import('../server/nodes/5.js'),
			() => import('../server/nodes/6.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			},
			{
				id: "/about-the-project",
				pattern: /^\/about-the-project\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 3 },
				endpoint: null
			},
			{
				id: "/explore",
				pattern: /^\/explore\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 4 },
				endpoint: null
			},
			{
				id: "/explore/internet-usage",
				pattern: /^\/explore\/internet-usage\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 5 },
				endpoint: null
			},
			{
				id: "/meet-the-team",
				pattern: /^\/meet-the-team\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 6 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
});
