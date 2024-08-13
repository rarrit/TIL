const Table = ({
  tableProps,
  items,
  List,
  onDelete,
}) => {
  return (
    <table>
      <thead>
        <tr>
          <th>{tableProps.th_01}</th>
          <th>{tableProps.th_02}</th>
          <th>{tableProps.th_03}</th>
          <th>{tableProps.th_04}</th>
          <th>{tableProps.th_05}</th>
        </tr>
      </thead>
      <tbody>
        {
          // countrys 의 메달 값을 비교한 후 로직 실행
          items.sort((a, b) => {
            // 금메달 비교
            if (b.countryMedalGold !== a.countryMedalGold) {
              return b.countryMedalGold - a.countryMedalGold;
            }
            // 금메달 수가 같다면 은메달 비교
            if (b.countryMedalSilver !== a.countryMedalSilver) {
              return b.countryMedalSilver - a.countryMedalSilver;
            }
            // 금메달, 은메달 수가 같다면 동메달 비교
            return b.countryMedalBronze - a.countryMedalBronze;
          })
            .map(country => {
              return (
                <List
                  key={country.id}
                  country={country}
                  onDelete={onDelete}
                />
              )
            })
        }
      </tbody>
    </table>
  )
}

export default Table
