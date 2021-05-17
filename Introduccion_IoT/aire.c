// Hola mundo Soy Victor
// 2021 curso de IoT

// llib

#include "ESP826WiFi.h"
#include <aREST.h>
#include <DHT.h>
#include <DHT_U.h>
#include <Adafruit_Sensor.h>

// Def

#define DHTPIN D5;
#define DHTTYPE DHT22;
#define MQ A0;

// Init
DHT dht(DHTPIN, DHTTYPE);

// aREST
aREST rest = aREST();

// WiFi
const char* ssid = "Platzi";
const char* password = "contrasena";

// Port
#define LISTEN_PORT 80;

// Create instance of server
WiFiServer server(LISTEN_PORT);

// Varialbes API
float mq, humidity, temperature;

void setup() {
  Serial.begin(9600);
  dht.begin();

  // Init Variables API
  rest.variable("temperature", &temperature);
  rest.variable("humidity",&humidity);
  rest.variable("contaminacion",&mq);

  // Name ID
  rest.set_id("1")
  rest.set_name("sensor_wemos")

  // Connect to WiFi
  WiFi.begin(ssid, password);
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
  }

}