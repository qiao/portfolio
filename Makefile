all: css js

css:
	cat css/font-awesome.min.css \
		css/style.css \
		> build/application.css
	yuicompressor -o build/application.css build/application.css

js:
	cat js/jquery.min.js \
		js/main.js \
		js/ga.js \
		> build/application.js
	uglifyjs -nc -o build/application.js build/application.js


.PHONY: all css js
