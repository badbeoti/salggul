import {
  AscentRateChartDiv,
  AscentRateChartItem,
  AscentRateChartItemSplit,
  AscentRateChartTab,
  AscentRateChartTabItem,
} from '../CSS/AscentRateChartStyled';

import useAllMarkets from '../features/AllMarkets/useAllMarkets';
import useAscentRates from '../features/AscentRates/useAscentRates';
import useUserData from '../features/UserData/useUserData';

export default function AscentRateChart() {
  const { ratesSelectors, curDateTab, onClickSelectDateTab, onClickRateChartItem } =
    useAscentRates();
  const { dateLabels } = useUserData();
  const { getMarketTickers } = useAllMarkets();

  console.log(ratesSelectors[`rates${curDateTab}`]);

  return (
    <AscentRateChartDiv>
      <span style={{ color: '#ffffff', fontWeight: 700, marginBottom: 4 }}>상승률 순위</span>
      <AscentRateChartTab>
        {dateLabels.map(
          (date) =>
            date.value !== '0' && (
              <AscentRateChartTabItem
                onClick={() => onClickSelectDateTab(date.value)}
                isSelect={date.value === curDateTab}
              >
                {date.label}
              </AscentRateChartTabItem>
            )
        )}
      </AscentRateChartTab>
      {ratesSelectors[`rates${curDateTab}`].map((e) => (
        <AscentRateChartItem onClick={() => onClickRateChartItem(e)}>
          <AscentRateChartItemSplit>
            <img
              width={32}
              height={32}
              src={`https://static.upbit.com/logos/${e.code.slice(4)}.png`}
              alt="market-img"
            />
          </AscentRateChartItemSplit>

          <AscentRateChartItemSplit>
            <span>{getMarketTickers(e.code)}</span>
          </AscentRateChartItemSplit>

          <AscentRateChartItemSplit ascent={Number(e[`changeRate${curDateTab}Days`])}>
            <span>{(Number(e[`changeRate${curDateTab}Days`]) * 100).toFixed(2)}%</span>
          </AscentRateChartItemSplit>
        </AscentRateChartItem>
      ))}
    </AscentRateChartDiv>
  );
}
