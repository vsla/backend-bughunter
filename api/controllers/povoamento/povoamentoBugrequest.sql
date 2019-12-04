INSERT INTO public.bugrequests(
	title, category, repository_link, live_link, status, description, value, project_id, hunter_id, authentication_token)
	VALUES ('Bug no menu lateral da aplicação', 'Bug front','github.com/brailog', 'www.aplicaçãorodando.com.br', 'Em analise', 'O movimento do menu lateral está completamente bugado', 100, 1, 1, 0);
INSERT INTO public.bugrequests(
	title, category, repository_link, live_link, status, description, value, project_id, hunter_id, authentication_token)
	VALUES ('FALHA DE SEGURANÇA', 'Bug','github.com/vsla', 'www.aplicaçãorodando.com.br', 'Em analise', 'UM HTTP com o passward do usuario está passando como parametro no URL da aplicação, erro muito grave de segurança', 999, 4, 3, 0);