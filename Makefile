npm-publish:
	rm -fr node_modules build
	npm install
	npm run build
	npm whoami
	npm publish --access public