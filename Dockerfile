FROM alpine:3.6

ADD tmp/_output/bin/sprintbotio-web /home/sprintbotio-web/sprintbotio-web
RUN chmod a+x /home/sprintbotio-web/sprintbotio-web
ADD web/build /home/sprintbotio-web/web/build
add database.sql /home/sprintbotio-web/database.sql

EXPOSE 8080

CMD cd /home/sprintbotio-web/ && /home/sprintbotio-web/sprintbotio-web