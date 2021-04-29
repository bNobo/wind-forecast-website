export interface Weather {
    title:string,
    weatherSymbol:Weather_Symbol
}

export enum Weather_Symbol {
    "Unknown"=             "⯑",
    "Cloudy"=              "☁",
    "Fog"=                 "🌫",
    "HeavyRain"=           "🌧",
    "HeavyShowers"=        "🌧",
    "HeavySnow"=           "❄",
    "HeavySnowShowers"=    "❄",
    "LightRain"=           "🌦",
    "LightShowers"=        "🌦",
    "LightSleet"=          "🌨",
    "LightSleetShowers"=   "🌨",
    "LightSnow"=           "🌨",
    "LightSnowShowers"=    "🌨",
    "PartlyCloudy"=        "🌤",
    "Sunny"=               "☀",
    "ThunderyHeavyRain"=   "⛈",
    "ThunderyShowers"=     "⛈",
    "ThunderySnowShowers"= "⛈",
    "VeryCloudy"=          "☁",
}
