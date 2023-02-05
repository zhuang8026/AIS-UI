export let TYPE_HEADER = {
    DEFAULT : 'default',
    FILTER: 'filter',
}
// table 的資料
export let tableData = [{
    id: '001',
    isCheck: true,
    isDisable: false,
    detail: [
      {
        txt: '資料1AAA資料1資料1資料1',
        type: 'default'  // type: 'default' -> normal text, 'status:1' -> green, 'status:2': red
      },
      { 
        txt: '資料2資料2資料2資料2資料2',
        type: 'default'
      },
      { 
        txt: '資料3資料3資料3資料3資料3',
        type: 'default'
      },
      { 
        txt: '資料3資料3資料3資料3資料3',
        type: 'status:1'
      }
  ]},
  {
    id: '002',
    isCheck: false,
    isDisable: false,
    detail: [
      {
        txt: '資料1資料1資料1資料1',
        type: 'default'  // type: 'default' -> normal text, 'status:1' -> green, 'status:2': red
      },
      { 
        txt: '資料2資料2資料2資料2資料2',
        type: 'default'
      },
      { 
        txt: '資料3資料3資料3資料3資料3',
        type: 'default'
      },
      { 
        txt: '資料3資料3資料3資料3資料3',
        type: 'status:1'
      }
  ]},
  {
    id: '003',
    isCheck: false,
    isDisable: false,
    detail: [
      {
        txt: '資料1資料1資料1資料1',
        type: 'default'
      },
      { 
        txt: '資料2資料2資料2資料2資料2',
        type: 'default'
      },
      { 
        txt: '資料3資料3資料3資料3資料3',
        type: 'default'
      },
      { 
        txt: '資料3資料3資料3資料3資料3',
        type: 'status:2'
      }
  ]},
] //end: tableData


export let tableHeader = [{
        type: TYPE_HEADER.DEFAULT,
        txt: '標題1標題1標題1標題1'
    },
    {
      type: TYPE_HEADER.DEFAULT,
      txt: '標題111標題1111標題1111標題111'
    },
    // {
    //     type: TYPE_HEADER.FILTER,
    //     txt: [{
    //         selected: true,
    //         text: '選項1',
    //         value: '111'
    //     },
    //     {
    //         selected: false,
    //         text: '選項2',
    //         value: '222'
    //     },
    //     {
    //         selected: true,
    //         text: '選項3',
    //         value: '333'
    //     }]
    // },
    {
        type: TYPE_HEADER.DEFAULT,
        txt: '標題2標題2標題2標題2'
    },
    {
        type: TYPE_HEADER.DEFAULT,
        txt: '標題3標題3標題3標題3'
    },
]