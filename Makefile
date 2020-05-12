#
# Makefile options:
#
 BOLD  = \033[1m
/BOLD  = \033[0m
STRING = "$(BOLD)%-10s$(/BOLD)%s\n"
HELP   = sed -E 's/(`.*`)/\\e[1m\1\\e[0m/'

TEXT_SERVICE = "%-10s $(BOLD)Ok$(/BOLD)\n"
_HOSTSFILE_  = /etc/hosts
_DOCKERFILE_ = .../placeholder/Dockerfile

CIRCLECI_DIR = ./.circleci
CIRCLECI_PRE = $(CIRCLECI_DIR)/pre-processed.yml
CIRCLECI_PWN = --volume "/var/run/docker.sock:/var/run/docker.sock"
CIRCLECI_MNT = --volume "$(shell pwd):/workdir"
CIRCLECI_XXX = sed 's/\\\#/\\\\\\\\\#/; s/@/\\\\@/; s/\!/\\\\!/'
CIRCLECI_AWK = awk '/.+/ { print("--env "$$0) }'
CIRCLECI_CFG = circleci config process
CIRCLECI_RUN = circleci local execute -c $(CIRCLECI_PRE) $(CIRCLECI_MNT) $(CIRCLECI_ENV)
CIRCLECI_ENV = $(shell cat .circleci/.env 2> /dev/null | $(CIRCLECI_AWK))
PROJECT_ADDR = $(shell [ -e .env ] && ( \
	cat .env | grep APP_URL | awk -F'=' \
		'{ print($$2); }'   | sed -E    \
		's/.*\/\/(.*)[\/]*.*/\1/''''' ) \
		|| echo "$$APP_URL")

MESSAGEINSTALL = "- All containers installed. Proceed with $(BOLD)make launch$(/BOLD) to start application."
MESSAGEHOSTCFG = "- Add an entry to $(BOLD)$(PROJECT_ADDR)$(/BOLD) in your $(BOLD)$(_HOSTSFILE_)$(/BOLD) before continue."
MESSAGEREQUEST = "- $(BOLD)$$n$(/BOLD) is installed."
MESSAGEREQUIRE = "- Install $(BOLD)$$n$(/BOLD) before continue."

define REQUIRE
defFuncREQUIRE(){ \
	echo """"" "; \
	for n in $$@; \
	do which $$n >/dev/null; \
		r="$${?}"; \
		[ "$${r}" -gt 0 ] \
			&& { i=$(MESSAGEREQUIRE); } \
			|| { i=$(MESSAGEREQUEST); };\
		echo "$${i}"; \
		[ $$r -eq 1 ] \
		&& { exit 1;} \
		|| { true 0;};\
	done;\
}; \
defFuncREQUIRE
endef



DEFAULT: first-execution

first-execution:
	@([ -e .env ] \
	&& { $(MAKE) -s help; } \
	|| { $(MAKE) -s demands \
	&& cp .env.templa* .env \
	&& echo "\nExecute $(BOLD)make install$(/BOLD) or $(BOLD)make launch$(/BOLD) to continue.";})



demands: check-host # Check for requirements.
	@$(REQUIRE) circleci docker docker-compose

check-host:
	@cat /etc/hosts | grep -q "$(PROJECT_ADDR)" || echo $(MESSAGEHOSTCFG)

check: # Verify if `docker-compose.yaml` is correct.
	@D=Dockerfile; \
	for each in web worker  ; \
	do (TARGET=./"$${each}" ; \
		SOURCE=./placeholder; \
		([ ! -d $$TARGET     ] && cp -Rf $$(pwd)/.../$$SOURCE     $$TARGET); \
		([ ! -e $$TARGET/$$D ] && cp     $$(pwd)/.../$$SOURCE/$$D $$TARGET/$$D); \
		test -e $$TARGET/$$D); \
	done

	@\
	docker-compose config --services \
		| awk '{ printf($(TEXT_SERVICE), $$1); }'



define TRY_INSTALL
export  BUILD_FILE=".last-build.error"; \
rm -f $$BUILD_FILE; \
docker-compose build --force-rm 2>$$BUILD_FILE \
	&&( rm -f $${BUILD_FILE}; echo "\\n" $(MESSAGEINSTALL) "\\n" ) \
	||( ERROR=$$(tail -n1 $$BUILD_FILE|\
			sed -E 's/.*Errno.*\] (.*)/\1/');\
		LINE=$$(cat $$BUILD_FILE | grep -n "Traceback" | awk -F':' '''''{print($$1)}'); \
		CONTAINER=$$(head -n$$((LINE-1)) $$BUILD_FILE | tail -n1 | awk '{print($$2)}'); \
		echo "\\n- Error creating $(BOLD)$$CONTAINER$(/BOLD):\n\t$$ERROR\n"; \
		echo "- Fix it before continue."; \
	)
endef
install: check  # Build containers.
	@$(TRY_INSTALL)

clean: uninstall
uninstall: # Remove containers and disable configs.
	@docker-compose stop
	@docker-compose images -q \
	&& docker rm $$(docker-compose images -q)
	@[ ! -e .env ] || mv .env .env.$$(date +'%Y%m%d%H%I%S')
	@rm -Rf api/node_modules app/node_modules .last-build.error api/package-lock.json app/package-lock.json
	@sudo rm -Rf .../database/{logs,mysql}




circleci-pre-process:  #- Preprocess CircleCI config file to run locally.
	@$(CIRCLECI_CFG) $(CIRCLECI_DIR)/config.yml > $(CIRCLECI_PRE)

circleci-qa: circleci-pre-process #- Runs CircleCI quality workflow locally.
	@$(CIRCLECI_RUN) --job quality

circleci-build: circleci-pre-process
	@$(CIRCLECI_RUN) --job build

circleci-deploy: circleci-pre-process
	@$(CIRCLECI_RUN) --job deploy

circleci: circleci-qa circleci-build circleci-deploy # Runs CircleCI workflow locally.



#
launch: check # Launch application.
	@( docker-compose up -d ); \
	HOST="$(PROJECT_ADDR)""" ; \
	[ -z "$${HOST}" ] && HOST="http://localhost/"; \
	echo "\n- Launched app: http://$(BOLD)"$$HOST"$(/BOLD)"; \
	sleep 1; x-www-browser "http://""""""""$$HOST"

launch-debug:
	@( docker-compose up )


lint-app:
	@docker-compose run app ./node_modules/.bin/tslint --project .



#
easter-time:
	@EGG=0 $(MAKE) about -s

EGG ?= 1
define EXTRACT
# -: H4sIAAAAAAACAxXKwQ2AIBAEwFa2AJsCPPDi4SYsPOhefU4yXrG5EOSNEpTFRt5IUS7rXlIcSJqDwfYL
# -: HDBx2vAC7Z4Zguv7nZrQGoZJVH9OdH6w1vQCCZdAjGQAAAA=
_="\n---✂ ---\n"; \
defProcEXTRACT(){ $$say WWVzIEkgZG8gdXNlbGVzcyBjb2RlIGZvciBmdW4gLSBhbmQgYWxzbyB0byBhcHBlYXNlIG15IE9DRA==;}; \
defConfEXTRACT(){ $$say "$$_$$(defProcEXTRACT)" "$$_$$(cat $$SELF | grep '\-\:' | awk '{ print($$3) }')";}; \
defFuncEXTRACT(){ export SELF="$(MAKEFILE_LIST)" I="$$(cat "$(_DOCKERFILE_)" | grep codeAuthor)" say=echo ; \
	getAuthors(){ export RESULT="$$(echo "$$I" | sed -E 's/.*="(.+) <(.*)>.*/\1,\2/')""                ";}; \
	getExacURL(){ export RESULT="$$(head "$$1" -n"$$3" | tail -n"$$2" | sed -E 's/.*\((.*)\).*/\1/')"" ";}; \
	getExactLn(){ export RESULT="$$(cat  "$$1" | grep -n "$$SELF:$$2" | awk -F':' '{ print($$1); }''';)";}; \
	seeForName(){ export MYNAME="$$(getAuthors && { echo "$$RESULT""" | awk -F',' '{ print($$1); }';};)";}; \
	seeForMail(){ export MYMAIL="$$(getAuthors && { echo "$$RESULT""" | awk -F',' '{ print($$2); }';};)";}; \
	getExactLn "$$3" /"$$1"; END="$$((RESULT-001))"; \
	getExactLn "$$3"  "$$1"; INI="$$((RESULT-END))"; \
	getExacURL "$$3"  """""$$INI" """""""""$$END"""; \
	seeAuthors(){ seeForName && seeForMail; true; }; \
	seeAuthors && HI="I am $(BOLD)$$MYNAME$(/BOLD)"; \
	CONTACT="Mail me at $(BOLD)$$MYMAIL$(/BOLD)and"; \
	URLs="$$RESULT"; "$${say}" "\nHi!" "$$HI." \\n ; \
	$$say $$CONTACT follow me on social media: \\n ; \
	for x in $${URLs}; do "$${say}" "\t$${x}"; done; \
	$$say "\nT""h""a""n""k""s" "f""o""r" "a""l""l!"; \
	(defConfEXTRACT) $(EGG)>/dev/null; \
} && defFuncEXTRACT
endef
#
about: # About the author.
	@$(EXTRACT) about from README.md



#
help: # Hic svnt dracones.
	@(echo """"""""""""""""""" \
	$$(awk 'BEGIN {FS=":.*?#"} \
	/^([A-z0-9.\-_?]+:.*|^)#/{ \
	gsub("(:|^)#( |^|$$)",""); \
	if(substr($$1,1,1) !~ /-/  \
	&& substr($$2,1,1) !~ /-/) \
	printf $(STRING),$$1,$$2}' \
	$(MAKEFILE_LIST)|$(HELP))" \
	||((((((($(MAKE) -s))))))))

#
%:
	@:
