.DEFAULT_GOAL := build

init:
	@echo "Initialising...👷"
	@yarn install

start:
	@echo "Bootin' up! 🚗💨"
	@yarn start

build: --check
	@echo "🏗️ Building..."
	@yarn build

clean:
	@echo "🧼 Cleaning!"
	@yarn clean

--check:
	@yarn clean
	@yarn install
	@yarn lint
	@yarn tsc --project tsconfig.json
