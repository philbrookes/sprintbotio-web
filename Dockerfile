FROM alpine:3.6

ADD tmp/_output/bin/sprintbotio-web /home/sprintbotio-web/sprintbotio-web
RUN chmod a+x /home/sprintbotio-web/sprintbotio-web
ADD web/build /home/sprintbotio-web/web/build

EXPOSE 8080

CMD /home/sprintbotio-web/sprintbotio-web