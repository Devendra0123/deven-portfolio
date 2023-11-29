import { ShowcaseCardType } from "@/types";
import React from "react";
import ShowcaseCard from "../Card/ShowcaseCard";

interface Props {
  data: ShowcaseCardType[];
}
const ShowcaseCardsTemplate = ({ data }: Props) => {
  return (
    <div className="w-full flex flex-col items-center">
      {data?.length > 0 && (
        <div className="w-full flex flex-col items-center">
          {data.length < 5 ? (
            <div>
              {data.map((item, index) => (
                <ShowcaseCard
                  key={index}
                  data={item}
                  cardStyle="w-[300px] h-[250px] "
                />
              ))}
            </div>
          ) : data?.length === 5 ? (
            <div className="w-full flex justify-center items-start flex-wrap lg:no-wrap gap-[50px]">
              <div className="flex flex-col items-center gap-[30px]">
                <ShowcaseCard data={data[0]} cardStyle="w-[400px] h-[250px] " />
                <ShowcaseCard data={data[1]} cardStyle="w-[400px] h-[250px] " />
              </div>
              <div>
                <ShowcaseCard data={data[2]} cardStyle="w-[400px] h-[530px] " />
              </div>
              <div className="flex flex-col items-center gap-[30px]">
                <ShowcaseCard data={data[3]} cardStyle="w-[400px] h-[250px] " />
                <ShowcaseCard data={data[4]} cardStyle="w-[400px] h-[250px] " />
              </div>
            </div>
          ) : (
            <div></div>
          )}
        </div>
      )}
    </div>
  );
};

export default ShowcaseCardsTemplate;
