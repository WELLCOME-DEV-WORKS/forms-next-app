import React from 'react';

const DecisionTimeSection: React.FC = () => {
  return (
    <section className="flex flex-col items-center py-20 mt-14 w-full bg-white rounded-3xl max-w-[993px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] max-md:mt-10 max-md:max-w-full">
      <h2 className="text-3xl font-semibold text-center text-rose-400">
        一分钟内即可导出分析结果 <br /> 根据需求和预算生成不同方案
      </h2>
      <div className="z-10 mt-8 max-w-full w-[888px]">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
            <div className="px-16 py-6 w-full text-xl font-semibold tracking-tight text-center text-rose-400 whitespace-nowrap bg-rose-100 rounded-none max-md:px-5 max-md:mt-10">
              方案A
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div className="grow px-16 py-6 mt-14 w-full text-xl font-semibold tracking-tight text-center text-white whitespace-nowrap bg-rose-400 rounded-none max-md:px-5 max-md:mt-10">
              方案B
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div className="grow px-16 py-6 mt-14 w-full text-xl font-semibold tracking-tight text-center text-white whitespace-nowrap bg-rose-600 rounded-none max-md:px-5 max-md:mt-10">
              方案C
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch px-14 bg-stone-300 bg-opacity-20 max-md:px-5 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex z-10 flex-col px-4 py-8 mx-auto mt-0 w-full text-base font-semibold tracking-tight text-black whitespace-nowrap bg-white rounded-none max-md:mt-3">
              <div className="flex gap-10">
                <div className="flex flex-col flex-1">
                  <div>XXX项目</div>
                  <div className="mt-9">XXX项目</div>
                  <div className="self-start mt-8">XX项目</div>
                </div>
                <div className="flex flex-col flex-1 text-right">
                  <div>xxxx元</div>
                  <div className="self-start mt-9 max-md:ml-2.5">xxx元</div>
                  <div className="mt-8">xxxx元</div>
                </div>
              </div>
              <div className="shrink-0 mt-7 h-px border border-black border-solid" />
              <div className="flex gap-5 justify-between mt-8">
                <div>合计</div>
                <div className="text-right">2800元</div>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex z-10 flex-col px-4 pt-11 pb-7 mx-auto -mt-3.5 w-full text-base font-semibold tracking-tight text-black whitespace-nowrap bg-white rounded-none max-md:mt-10">
              <div className="flex gap-10">
                <div className="flex flex-col flex-1">
                  <div>XXX项目</div>
                  <div className="mt-9">XXX项目</div>
                  <div className="self-start mt-8">XX项目</div>
                  <div className="mt-8">XXX项目</div>
                </div>
                <div className="flex flex-col flex-1 text-right">
                  <div>xxxx元</div>
                  <div className="self-start mt-9 max-md:ml-2.5">xxx元</div>
                  <div className="mt-8">xxxx元</div>
                  <div className="self-start mt-8 max-md:ml-2.5">xxx元</div>
                </div>
              </div>
              <div className="shrink-0 mt-8 h-px border border-black border-solid" />
              <div className="flex gap-5 justify-between mt-7">
                <div>合计</div>
                <div className="text-right">6800元</div>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col px-4 py-10 mx-auto -mt-3.5 w-full text-base font-semibold tracking-tight text-black whitespace-nowrap bg-white rounded-none max-md:mt-10">
              <div className="flex gap-10">
                <div className="flex flex-col flex-1">
                  <div>XXX项目</div>
                  <div className="mt-9">XXX项目</div>
                  <div className="self-start mt-8">XX项目</div>
                  <div className="self-start mt-8">XX项目</div>
                  <div className="mt-9">XXX项目</div>
                </div>
                <div className="flex flex-col flex-1 text-right">
                  <div>xxxx元</div>
                  <div className="self-start mt-9 max-md:ml-2.5">xxx元</div>
                  <div className="mt-8">xxxx元</div>
                  <div className="mt-8">xxxx元</div>
                  <div className="mt-9">xxxx元</div>
                </div>
              </div>
              <div className="shrink-0 mt-7 h-px border border-black border-solid" />
              <div className="flex gap-5 justify-between mt-8">
                <div>合计</div>
                <div className="text-right">12880元</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="mt-28 text-3xl font-semibold text-center text-rose-400 max-md:mt-10 max-md:max-w-full">
        缩短决策时间，您的时间十分宝贵
      </p>
    </section>
  );
};

export default DecisionTimeSection;