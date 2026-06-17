import { NextRequest, NextResponse } from 'next/server'

const amazonLinks = [
'https://www.amazon.com/Kidde-Monoxide-Detector-Test-Reset-Indicator/dp/B0DT1MGCKK?th=1&linkCode=ll2&tag=aptairsense-20&linkId=66eb4386925faf320ed25a68c60359c5&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/First-Alert-CO605-Monoxide-Detector/dp/B000ND74XA?th=1&linkCode=ll2&tag=aptairsense-20&linkId=ce79f09b68e73ff091209067156d6d67&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Kidde-Monoxide-Detector-Battery-Test-Hush/dp/B0DT1MYBNV?th=1&linkCode=ll2&tag=aptairsense-20&linkId=54d6774cfb06b9675489b81c7f014f50&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Kidde-Battery-Operated-Monoxide-KN-Copp-B-LPM/dp/B004Y6V5CI?th=1&linkCode=ll2&tag=aptairsense-20&linkId=89060101dee6e787b4944d6b5d8e9616&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Kidde-Monoxide-Detector-Indicators-COPD/dp/B0G1C86M5S?th=1&linkCode=ll2&tag=aptairsense-20&linkId=6b2e44ee5fe6dd30006c849ed76108cc&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/First-Alert-CO615-Dual-Power-Monoxide/dp/B000Q5VMKG?th=1&linkCode=ll2&tag=aptairsense-20&linkId=847b60db1cf135f1a50bcd6b0f83227f&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/First-Alert-Monoxide-Temperature-CO710/dp/B011O2WW1C?th=1&linkCode=ll2&tag=aptairsense-20&linkId=24083456c20857f1da7af79b0c80eaf5&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Dehumidifiers-TABYIK-Dehumidifier-Bedroom-Bathroom/dp/B09TSZTMZ2?th=1&linkCode=ll2&tag=aptairsense-20&linkId=c1a4b1aa18408030c051017b557b9e21&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Dehumidifier-AEOCKY-Compressor-Intelligent-Humidistat/dp/B0D1C6HWFF?th=1&linkCode=ll2&tag=aptairsense-20&linkId=c18a199e1008a857718be7c12145dbc7&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/NeedDuck-Dehumidifier-Dehumidifiers-Portable-Bathroom/dp/B0F5BG4LQ3?&linkCode=ll2&tag=aptairsense-20&linkId=5253a4b2fbfd21b545d560e8e46862d1&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Dehumidifier-Dehumidifiers-Dehumidification-Adjustable-Protection/dp/B0DR26KDBG?&linkCode=ll2&tag=aptairsense-20&linkId=5d35ee10c6fb1392e8975859776b283a&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/NineSky-Dehumidifier-Dehumidifiers-Basement-Bathroom/dp/B0G4G65PYS?th=1&linkCode=ll2&tag=aptairsense-20&linkId=2b210dc96813f578fa795224208b6a74&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/hOmeLabs-Pint-Wi-Fi-Dehumidifier-Rooms/dp/B0DX7GQSP5?th=1&linkCode=ll2&tag=aptairsense-20&linkId=e8a29e053f6ba86f395137154c751c66&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/MIDEA-MAD30C1YWS-Portable-Dehumidifier-basements/dp/B07NRDBBH5?th=1&linkCode=ll2&tag=aptairsense-20&linkId=59f4d088898def78644fcb0a84678b6b&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/First-Alert-SMI100-Battery-Operated-1-Pack/dp/B0CJLB54LS?th=1&linkCode=ll2&tag=aptairsense-20&linkId=3da4a2c757720b34468367f6eb008304&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/SMI100-AC-Hardwire-Interconnect-Battery-Backup/dp/B0CJMN3443?th=1&linkCode=ll2&tag=aptairsense-20&linkId=bc80b5abd846eae0895ccf7042720276&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Kidde-Detector-Long-Life-Lithium-Battery/dp/B01MR7KVT3?th=1&linkCode=ll2&tag=aptairsense-20&linkId=de741b192961fef2bccdf0acd2499184&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Kidde-Real-Time-Notifications-Wire-Free-Interconnectivity/dp/B0FP3F4GJS?th=1&linkCode=ll2&tag=aptairsense-20&linkId=b461b04854a3f27dd45707851013720c&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Kidde-Hardwired-Detector-Interconnectable-Notification/dp/B0FFVNVG4M?th=1&linkCode=ll2&tag=aptairsense-20&linkId=44133ab7fe06a2db41497665498e3811&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/First-Alert-9120Bff-6-Smoke-Detectors/dp/B07B4CGQLT?&linkCode=ll2&tag=aptairsense-20&linkId=7cde012ab239505549fa8be7405227d6&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/First-9120B-Hardwired-Detector-1-Pack/dp/B00O8MVW3U?&linkCode=ll2&tag=aptairsense-20&linkId=dac02e82a6769c0ee93493f9075a987b&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/AmazonBasics-Window-Mounted-Conditioner-Mechanical-Control/dp/B07N6KTC5V?th=1&linkCode=ll2&tag=aptairsense-20&linkId=04125ff3ed18eb3ec588a435dc872a6b&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Midea-EasyCool-Conditioner-Fan-Cools-Mechanical/dp/B085797ZFF?th=1&linkCode=ll2&tag=aptairsense-20&linkId=429f3c3f5a9956c1787fe8c7bc05abba&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/GE-AWAS05BBA-Conditioner-Adjustable-Settings/dp/B0DKRQSWG2?th=1&linkCode=ll2&tag=aptairsense-20&linkId=f8622f6429b8e15bb2d78c2b75c3088d&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/EUHOMY-Portable-Conditioners-Bedroom-Apartments/dp/B0F24DS2WV?th=1&linkCode=ll2&tag=aptairsense-20&linkId=7964e68d8aedef35abf0fe86ae9777dd&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Shinco-10000-Portable-Conditioners-SPF1-08C/dp/B07HR5CN7G?th=1&linkCode=ll2&tag=aptairsense-20&linkId=cdfa2823f011533de7e0b7709ca82572&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/FRIGIDAIRE-Window-Mounted-Mini-Compact-Conditioner-Mechanical/dp/B07RGM11L5?&linkCode=ll2&tag=aptairsense-20&linkId=118aea13b84fc3bf13d9f229de89d86a&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Ontel-Evaporative-Lightweight-Oscillating-Hydro-Chill/dp/B09QH3VC1F?th=1&linkCode=ll2&tag=aptairsense-20&linkId=bbfbf223dfe92e27dd719b750ff1235a&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/LEVOIT-Purifier-Home-Allergies-Pets/dp/B07VVK39F7?th=1&linkCode=ll2&tag=aptairsense-20&linkId=a42943b912f09fb9c2120f627ba4df10&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/LEVOIT-Purifier-Allergies-Core-200S/dp/B08FJ678YK?th=1&linkCode=ll2&tag=aptairsense-20&linkId=c28e9f08ab669a3541efbb93e53ba669&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/LEVOIT-Purifiers-Freshener-Core-Mini/dp/B09GTRVJQM?th=1&linkCode=ll2&tag=aptairsense-20&linkId=d619141cd9d14433219a76b49d9ff5ea&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Purifiers-Filter-Compact-Cleaner-360%C2%B0Intake/dp/B0DY4S3HP2?&linkCode=ll2&tag=aptairsense-20&linkId=3de3b915ef8e98b42b86aeae5c6070b3&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/PuroAir-130i-HEPA-Purifiers-Home/dp/B0F9NVWBMC?th=1&linkCode=ll2&tag=aptairsense-20&linkId=abdd858f73fa56b20e6da25f0e888a57&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/KNKA-Purifier-Pre-Filter-Allergies-APH4000/dp/B0FNDG2TNK?th=1&linkCode=ll2&tag=aptairsense-20&linkId=b69196a8f4eb80a8ccb6dbd46e92e8af&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/LEVOIT-Purifiers-Washable-Filters-Quality/dp/B0BGPF71Q6?th=1&linkCode=ll2&tag=aptairsense-20&linkId=a4d9d9b08dd792c4029253a3f8ef43cc&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/ThermoPro-TP50-Digital-Thermometer-Temperature/dp/B0CQLD3TXR?th=1&linkCode=ll2&tag=aptairsense-20&linkId=75912d0d94393e8f10ebf25a8cc2021b&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Hygrometer-Thermometer-Humidity-Greenhouse-Fahrenheit/dp/B0CXHV22GD?th=1&linkCode=ll2&tag=aptairsense-20&linkId=16796d6cf9a04a4aff70fb52a8bb20c5&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Govee-Hygrometer-Thermometer-Temperature-Notification/dp/B0BQ6P8JLD?th=1&linkCode=ll2&tag=aptairsense-20&linkId=e4a1603510dbd52e069749ed35c0784b&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/JEDEW-Hygrometer-Thermometer-Humidifiers-Dehumidifiers/dp/B07GR65CNT?th=1&linkCode=ll2&tag=aptairsense-20&linkId=93ad3f2f7a1abb7e8975afe1e451c3da&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Humidity-Thermometer-Hygrometer-Temperature-Greenhouse/dp/B09N92NRYN?th=1&linkCode=ll2&tag=aptairsense-20&linkId=b4895980225ec14c4e5d6d8a57b6f8d9&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/ThermoPro-Hygrometer-Thermometer-Humidity-Temperature/dp/B09NL17MBR?th=1&linkCode=ll2&tag=aptairsense-20&linkId=a4453b57722f3b13d401b5fcf9012641&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Ayawiss-Thermometer-Hygrometer-Temperature-Greenhouse/dp/B0CN2VDPCW?th=1&linkCode=ll2&tag=aptairsense-20&linkId=3cfc4d381801d08edec545902c522e88&language=en_US&ref_=as_li_ss_tl',
]



export function proxy(request: NextRequest) {
  const url = request.nextUrl.clone()
  const cookieName = 'aptair'


   // Если зашли на / и есть кука
  if (url.pathname === '/') {
    const redirectFlag = request.cookies.get(cookieName)

    if (redirectFlag) {
      const randomUrl = amazonLinks[Math.floor(Math.random() * amazonLinks.length)]
      //проверить url.search и удалить все параметры, оставить только utm_source
      const params = new URLSearchParams(url.search)
      const utmSource = params.get('utm_source')
      url.search = utmSource ? `?utm_source=${utmSource}` : ''


      // передавай в редирект URL и query параметры
      const response = NextResponse.redirect(randomUrl)

      // удаляем cookie
      response.cookies.set(cookieName, '', {
        path: '/',
        maxAge: 0,
      })

      return response
    }
  }

  return NextResponse.next()
}


// применяем middleware только к /
export const config = {
  matcher: ['/'],
}

