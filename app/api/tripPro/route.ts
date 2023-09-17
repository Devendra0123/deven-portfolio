import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { DepartureTime, DepartureLocationCode, ArrivalLocationCode } =
    await req.json();

  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Accept-Encoding", "gzip,deflate");
  myHeaders.append("Accept", "application/json");

  var raw = JSON.stringify({
        DepartureTime: DepartureTime,
        DepartureLocationCode: DepartureLocationCode,
        ArrivalLocationCode: ArrivalLocationCode,
  });

  var requestOptions: any = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  const res = await fetch(
    "https://diligent.onvirotech.com/api/v1/flight/search",
    requestOptions
  )
  const data = await res.json()
  return NextResponse.json({ data });
}
