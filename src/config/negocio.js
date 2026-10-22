// Datos del negocio. Los servicios se cargan en la base con: npm run db:instalar
// (después se leen desde la base de datos).
module.exports = {
    "nombre":  "EcoVida Diagnóstico",
    "whatsapp":  "5491155554567",
    "direccion":  "Av. Cabildo 3300, Belgrano, CABA",
    "horarioTexto":  "Lun a Vie · 8 a 14 hs",
    "horario":  {
                    "diaInicio":  "07:00",
                    "diaFin":  "15:00",
                    "paso":  20,
                    "desde":  "08:00",
                    "hasta":  "14:00",
                    "diasAbiertos":  [
                                         1,
                                         2,
                                         3,
                                         4,
                                         5
                                     ]
                },
    "servicios":  [
                      {
                          "nombre":  "Ecografía abdominal",
                          "precio":  38000,
                          "minutos":  20,
                          "descripcion":  "Ayuno de 8 hs. Tomar 1 litro de agua sin gas."
                      },
                      {
                          "nombre":  "Ecografía obstétrica",
                          "precio":  42000,
                          "minutos":  20,
                          "descripcion":  "Control del embarazo, sin preparación especial."
                      },
                      {
                          "nombre":  "Ecografía ginecológica",
                          "precio":  40000,
                          "minutos":  20,
                          "descripcion":  "Vejiga llena: tomar agua 1 hora antes."
                      },
                      {
                          "nombre":  "Ecografía de tiroides",
                          "precio":  36000,
                          "minutos":  20,
                          "descripcion":  "No requiere preparación."
                      },
                      {
                          "nombre":  "Ecografía mamaria",
                          "precio":  40000,
                          "minutos":  20,
                          "descripcion":  "No requiere preparación."
                      },
                      {
                          "nombre":  "Doppler vascular",
                          "precio":  55000,
                          "minutos":  40,
                          "descripcion":  "Evaluación de la circulación arterial y venosa."
                      }
                  ]
};
