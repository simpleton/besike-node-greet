compile:
	coffee --compile --output coffee2js src

test: compile
	./node_modules/mocha/bin/mocha

pack: test
	npm pack

.PHONY: compile
