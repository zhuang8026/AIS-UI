<template>
  <div class="home">
    <h2 class="my-32px">Combo box</h2>
    <hr/>
    <h2 class="my-32px">Normal </h2>
    <div class=" flex flex-row flex-wrap justify-start" >
      <div class="shadow-md bg-gray-200 rounded-sm card p-20px mr-10px mb-10px flex justify-center items-center" v-for="(item, index) in state.iconList" :key="index">
        <div class="sub" >{{item.className}}</div>
        <Icon class="h-100px w-100px ml-10px" :iconClass="item.className" type="svg" ></Icon>
      </div>
    </div>

    <hr class="mt-32px"/>
    <h2 class="my-32px">Performance</h2>
    <div class=" flex flex-row flex-wrap justify-start" >
      <div class="shadow-md rounded-sm card p-20px mr-10px mb-10px flex justify-center items-center">
        <div class="sub" >multi color
        </div>
        <Icon class="h-40px w-40px ml-20px text-grey-66" iconClass="dropdown" type="svg"></Icon>
        <Icon class="h-40px w-40px ml-20px text-green-500" iconClass="dropdown" type="svg"></Icon>
        <Icon class="h-40px w-40px ml-20px text-yellow-600" iconClass="dropdown" type="svg"></Icon>
        <Icon class="h-40px w-40px ml-20px text-root-dark" iconClass="dropdown" type="svg"></Icon>
      </div>
      <div class="shadow-md rounded-sm card p-20px mr-10px mb-10px flex justify-center items-center">
        <div class="sub" >rotate indefinite
        </div>
          <Icon class="h-40px w-40px ml-20px text-main" iconClass="dropdown" type="svg" :animate="true" ></Icon>
      </div>
      <div class="shadow-md rounded-sm card p-20px mr-10px mb-10px flex justify-center items-center">
        <div class="sub" >hover color
        </div>
          <Icon class="h-40px w-40px  ml-20px text-main hover:text-error-0 transition duration-300 ease-in-out" iconClass="dropdown" type="svg"  ></Icon>
      </div>

      <div class="shadow-md rounded-sm card p-20px mr-10px mb-10px flex justify-center items-center">
        <div class="sub" >hover rotate
        </div>
          <Icon class="h-40px w-40px  ml-20px text-main hover:-rotate-180 transition duration-300 ease-in-out" iconClass="dropdown" type="svg"  ></Icon>
      </div>
    </div>
  </div>
</template>

<script>

import Icon from '@/components/Icon/index.vue';

import { reactive} from 'vue';
export default {
  components: {
    Icon
  },
  props: {
  },
  setup() {
    const state = reactive({
      iconList : [
        { className: 'abnormal-machine' },
        { className: 'asus-iot-phm-dashboard-card-blue-1-1' },
        { className: 'asus-iot-phm-dashboard-card-blue-1-2' },
        { className: 'asus-iot-phm-dashboard-card-darkblue-1-1' },
        { className: 'asus-iot-phm-dashboard-card-dark-blue-1-2' },
        { className: 'asus-iot-phm-dashboard-card-green-1-1' },
        { className: 'asus-iot-phm-dashboard-card-green-1-2' },
        { className: 'asus-iot-phm-dashboard-icon-check-box-d' },
        { className: 'asus-iot-phm-dashboard-icon-check-box-h' },
        { className: 'asus-iot-phm-dashboard-icon-check-box-n' },
        { className: 'asus-iot-phm-dashboard-icon-check-box-p' },
        { className: 'asus-iot-phm-dashboard-icon-toggle-unselect-d' },
        { className: 'asus-iot-phm-dashboard-icon-toggle-unselect-h' },
        { className: 'asus-iot-phm-dashboard-icon-toggle-unselect-n' },
        { className: 'asus-iot-phm-dashboard-icon-toggle-unselect-p' },
        
        { className: 'asus-iot-phm-user-icon' },
        { className: 'dropdown' },
        { className: 'Ico_Check' },

        { className: 'search' },
        { className: 'devicelist' },
        { className: 'gatewaymanagement' },
        { className: 'abnormal-machine' },
        { className: 'eventlist' },
        { className: 'eventtrash' },
        { className: 'sensor-overview' },
        { className: 'modelmanagement' },
        { className: 'rulesettings' },
        { className: 'asus-iot-phm-user-icon' },
        { className: 'calendar' },
        { className: 'navigatuion-drawer' },
        { className: 'rectangle-9163' },
        { className: 'click' },
        { className: 'exit' },
        { className: 'restore' },
        { className: 'trash' },

        { className: 'ehs-dasboard' },
        { className: 'ehs-down' },
        { className: 'ehs-down2' },
        { className: 'ehs-event' },
        { className: 'ehs-icon-6' },
        { className: 'rectangle-9163' },
        { className: 'ehs-schedule' },
        { className: 'ehs-up' },
        { className: 'ehs-user' },


        { className: 'ehs-account' },
        { className: 'ehs-arrow -1' },
        { className: 'ehs-arrow -2' },
        { className: 'ehs-arrow' },
        { className: 'ehs-base-1' },
        { className: 'ehs-base -2' },
        { className: 'ehs-base' },
        { className: 'ehs-down-normal' },
        { className: 'ehs-log-1' },
        { className: 'ehs-seetings' },
        { className: 'ehs-updated-1' },

        { className: 'asus_proart_sw_ico_lock' },
        { className: 'user' },

      ]
    })





    return {
      state,

    }
  }// end: setup
}


</script>

