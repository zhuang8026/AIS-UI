// table 的資料
export let tableData = [{
    id: '001',
    isCheck: true,
    isDisable: false,
    detail: [
      {
        txt: '資料1AAA資料1資料1資料1',
        type: 'default',  // type: 'default' -> normal text, 'status:1' -> green, 'status:2': red
        edit: 'input', // none, input, select
      },
      { 
        txt: '資料2資料2資料2資料2資料2',
        sub: '小資料2小資料2',
        type: 'default',
        // edit: 'none', // none, input, select
      },
      { 
        txt: '資料3資料3資料3資料3資料3',
        type: 'default',
        edit: 'select', // none, input, select
        selectId : { 
          id: 'id-3',
          name: 'ID3 ID3',
          disabled: false,
        }, // select 的選項
      },
      { 
        txt: '資料3資料3資料3資料3資料3',
        type: 'status:1',
        // edit: 'none', // none, input, select
      }
  ]},
  {
    id: '002',
    isCheck: false,
    isDisable: false,
    detail: [
      {
        txt: '資料1AAA資料1資料1資料1',
        type: 'default',  // type: 'default' -> normal text, 'status:1' -> green, 'status:2': red
        edit: 'input', // none, input, select
      },
      { 
        txt: '資料2資料2資料2資料2資料2',
        sub: '小資料2小資料2',
        type: 'default',
        // edit: 'none', // none, input, select
      },
      { 
        txt: '資料3資料3資料3資料3資料3',
        type: 'default',
        edit: 'select', // none, input, select
        selectId : { 
          id: 'id-3',
          name: 'ID3 ID3',
          disabled: false,
        }, // select 的選項
      },
      { 
        txt: '資料3資料3資料3資料3資料3',
        type: 'status:1',
        // edit: 'none', // none, input, select
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
        id: 'th0',
        txt: '標題1標題1標題1標題1'
    },
    // filter : 類型
    {
        id: 'th1',
        txt: '篩選篩選',
        options: [   // filter的選項
          { "id": "op1", "name": "很長很長很長很長的選項", "disabled": false }, 
          { "id": "op2", "name": "Option 2", "disabled": false },
        ],
        val: [   // 被選擇的值的id
          "op1", "op2"
        ]
    },
    {
        id: 'th2',
        txt: '篩選2篩選2',
        options: [
          { "id": "op2-1", "name": "Option 1", "disabled": false },
          { "id": "op2-2", "name": "Option 2", "disabled": false },
        ],
        val: [
          "op2-2"
        ]
    },
    {
        id: 'th3',
        txt: '標題3標題3標題3標題3'
    },
]