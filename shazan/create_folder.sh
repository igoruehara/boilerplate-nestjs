#!/usr/bin/env bash
printf "\x1bc\n Informe o nome da pasta: "
read pasta;
	if [ -e "$pasta" ];then
	echo " A entidade $pasta, já existe, saindo.";
	exit 0;
	else
	echo " A entidade  ../src/${pasta}, não existe, e será criado.";
	mkdir  ../src/${pasta};
    #controller 
	touch  ../src/${pasta}/${pasta}-controller.ts;
    cat controller_example.ts  >  ../src/${pasta}/${pasta}-controller.ts 
    sed -i "s|_entity_Controller|${pasta^}Controller|g"  ../src/${pasta}/${pasta}-controller.ts
    sed -i "s|_entity_Interface|${pasta^}Interface|g"  ../src/${pasta}/${pasta}-controller.ts
    sed -i "s|_entity_Service|${pasta^}Service|g"  ../src/${pasta}/${pasta}-controller.ts
    sed -i "s|_entity_Dto|${pasta^}DTO|g"  ../src/${pasta}/${pasta}-controller.ts
    sed -i "s|_entity_|$pasta|g"  ../src/${pasta}/${pasta}-controller.ts
    ####################################################################
    #service
	touch  ../src/${pasta}/${pasta}-service.ts;
    cat service_example.ts  >  ../src/${pasta}/${pasta}-service.ts 
    sed -i "s|_entity_Service|${pasta^}Service|g"  ../src/${pasta}/${pasta}-service.ts
    sed -i "s|_entity_Entity|${pasta^}Entity|g"  ../src/${pasta}/${pasta}-service.ts
    sed -i "s|_entity_Interface|${pasta^}Interface|g"  ../src/${pasta}/${pasta}-service.ts
    sed -i "s|_entity_DTO|${pasta^}DTO|g"  ../src/${pasta}/${pasta}-service.ts
    sed -i "s|_entity_|$pasta|g"  ../src/${pasta}/${pasta}-service.ts
    ####################################################################
	#LOGIC
    touch  ../src/${pasta}/${pasta}-logic.ts;
    cat logic_example.ts  >  ../src/${pasta}/${pasta}-logic.ts 
    sed -i "s|_entity_Logic|${pasta^}Logic|g"  ../src/${pasta}/${pasta}-logic.ts
    sed -i "s|_entity_|${pasta}|g"  ../src/${pasta}/${pasta}-logic.ts
    ####################################################################
    #DTO
	touch  ../src/${pasta}/${pasta}-dto.ts;
    cat dto_example.ts  >  ../src/${pasta}/${pasta}-dto.ts
    sed -i "s|_entity_Dto|${pasta^}DTO|g"  ../src/${pasta}/${pasta}-dto.ts
    sed -i "s|_entity_Dto|${pasta^}DTO|g"  ../src/${pasta}/${pasta}-dto.ts
    sed -i "s|_entity_|$pasta|g"  ../src/${pasta}/${pasta}-dto.ts
    ###################################################################
    #UPDATE-DTO
	touch  ../src/${pasta}/${pasta}-dto.ts;
    cat updateDto_example.ts  >  ../src/${pasta}/${pasta}-update-dto.ts
    sed -i "s|_entity_DTO|${pasta^}DTO|g"  ../src/${pasta}/${pasta}-update-dto.ts
    sed -i "s|_entity_Dto|${pasta^}DTO|g"  ../src/${pasta}/${pasta}-update-dto.ts
    sed -i "s|_entity_|$pasta|g"  ../src/${pasta}/${pasta}-update-dto.ts
    ###################################################################
    #INTERFACE
	touch  ../src/${pasta}/${pasta}-interface.ts;
    cat interface_example.ts  >  ../src/${pasta}/${pasta}-interface.ts
    sed -i "s|_entity_DTO|${pasta^}DTO|g"  ../src/${pasta}/${pasta}-interface.ts
    sed -i "s|_entity_Interface|${pasta^}Interface|g"  ../src/${pasta}/${pasta}-interface.ts
    sed -i "s|_entity_|$pasta|g"  ../src/${pasta}/${pasta}-interface.ts
    ###################################################################
     #CONSTANTS MODEL
	touch  ../src/${pasta}/${pasta}-constants-model.ts;
    cat constants_model_example.ts  >  ../src/${pasta}/${pasta}-constants-model.ts
    sed -i "s|_entityModel|${pasta^}|g"  ../src/${pasta}/${pasta}-constants-model.ts
    sed -i "s|_entity_MODEL|${pasta^}Model|g"  ../src/${pasta}/${pasta}-constants-model.ts
    ###################################################################
    #SCHEMA MODEL
	touch  ../src/${pasta}/${pasta}-schema.ts;
    cat schema_example.ts  >  ../src/${pasta}/${pasta}-schema.ts
    sed -i "s|_entity_Entity|${pasta^}Entity|g"  ../src/${pasta}/${pasta}-schema.ts
    sed -i "s|_entity_|${pasta}|g"  ../src/${pasta}/${pasta}-schema.ts
    ###################################################################
    #CONNECT PROVIDER 
	touch  ../src/${pasta}/${pasta}-connect-provider.ts;
    cat connect_provider_example.ts  >  ../src/${pasta}/${pasta}-connect-provider.ts
    sed -i "s|_entity_|${pasta}|g"  ../src/${pasta}/${pasta}-connect-provider.ts
    ###################################################################
    #MODULE
	touch  ../src/${pasta}/${pasta}-module.ts;
    cat module_example.ts  >  ../src/${pasta}/${pasta}-module.ts
    sed -i "s|_entity_Service|${pasta^}Service|g"  ../src/${pasta}/${pasta}-module.ts
    sed -i "s|_entity_Controller|${pasta^}Controller|g"  ../src/${pasta}/${pasta}-module.ts
    sed -i "s|_entity_Module|${pasta^}Module|g"  ../src/${pasta}/${pasta}-module.ts
    sed -i "s|_entity_Logic|${pasta^}Logic|g"  ../src/${pasta}/${pasta}-module.ts
    sed -i "s|_entity_|${pasta}|g"  ../src/${pasta}/${pasta}-module.ts
    ###################################################################
	[ -e "${pasta}" ] && echo " A entidade $pasta, criada com sucesso."
	fi 


    