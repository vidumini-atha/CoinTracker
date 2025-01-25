// SIDEBAR TOGGLE

let sidebarOpen = false;
const sidebar = document.getElementById('sidebar');

function openSidebar() {
  if (!sidebarOpen) {
    sidebar.classList.add('sidebar-responsive');
    sidebarOpen = true;
  }
}

function closeSidebar() {
  if (sidebarOpen) {
    sidebar.classList.remove('sidebar-responsive');
    sidebarOpen = false;
  }
}

// ---------- CHARTS ----------

// BAR CHART
const barChartOptions = {
  series: [
    {
      data: [30, 30, 15, 10, 15],
      name: 'Products',
    },
  ],
  chart: {
    type: 'bar',
    background: 'transparent',
    height: 350,
    toolbar: {
      show: false,
    },
  },
  colors: ['#2962ff', '#d50000', '#2e7d32', '#ff6d00', '#583cb3'],
  plotOptions: {
    bar: {
      distributed: true,
      borderRadius: 10,
      horizontal: false,
      columnWidth: '60%',
    },
  },
  dataLabels: {
    enabled: false,
    
  },
  fill: {
    opacity: 1,
  },
  grid: {
    borderColor: '#55596e',
    yaxis: {
      lines: {
        show: true,
      },
    },
    xaxis: {
      lines: {
        show: true,
      },
    },
  },
  legend: {
    labels: {
      colors: '#000001',

    },
    show: true,
    position: 'top',
      
    
  },
  stroke: {
    colors: ['transparent'],
    show: true,
    width: 2,
  },
  tooltip: {
    shared: true,
    intersect: false,
    theme: 'dark',
  },
  xaxis: {
    categories: ['Housing', 'Foods and Groceries', 'Utilities & Bills', 'Travel Expenses', 'other'],
    title: {
      style: {
        color: '#000000',
        fontSize: 20

        
      },
    },
    axisBorder: {
      show: true,
      color: '#000000',
    },
    axisTicks: {
      show: true,
      color: '#000000',
    },
    labels: {
      style: {
        fontWeight: 'bold',
        colors: '#000000',
        
      },
    },
  },
  yaxis: {
    title: {
      text: 'Count',
      style: {
        fontWeight: 'bold',
        fontSize: '14px',
        color: '#000000',
      },
    },
    axisBorder: {
      color: '#000000',
      show: true,
    },
    axisTicks: {
      color: '#000000',
      show: true,
    },
    labels: {
      style: {
        colors: '#000000',
      },
    },
  },
};

const barChart = new ApexCharts(
  document.querySelector('#bar-chart'),
  barChartOptions
);
barChart.render();

// AREA CHART
const areaChartOptions = {
  series: [
    {
      name: 'Income',
      data: [98500, 102500, 101100, 105480, 102000, 112000, 110500],
    },
    {
      name: 'Expenses',
      data: [94582, 92050, 95456, 96250, 98750, 109850, 92580],
    },
  ],
  chart: {
    type: 'area',
    background: 'transparent',
    height: 350,
    stacked: false,
    toolbar: {
      show: false,
    },
  },
  colors: ['#00ab57', '#d50000'],
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
  dataLabels: {
    enabled: false,
  },
  fill: {
    gradient: {
      opacityFrom: 0.4,
      opacityTo: 0.1,
      shadeIntensity: 1,
      stops: [0, 100],
      type: 'vertical',
    },
    type: 'gradient',
  },
  grid: {
    borderColor: '#55596e',
    yaxis: {
      lines: {
        show: true,
      },
    },
    xaxis: {
      lines: {
        show: true,
      },
    },
  },
  legend: {
    style: {
      fontWeight: 'bold',
      fontSize: 40,
      
    },
    labels: {
      colors: '#000000',

    },
    show: true,
    position: 'top',
  },
  markers: {
    size: 6,
    strokeColors: '#1b2635',
    strokeWidth: 3,
  },
  stroke: {
    curve: 'smooth',
  },
  xaxis: {
    axisBorder: {
      color: '#000000',
      show: true,
    },
    axisTicks: {
      color: '#55596e',
      show: true,
    },
    labels: {
      offsetY: 5,
      style: {
        colors: '#000000',
        fontWeight: 'bold',

      },
    },
  },
  yaxis: [
    {
      title: {
        text: 'Purchase Orders',
        style: {
          fontWeight: 'bold',
          fontSize: '14px',
          color: '#000000',
        },
      },
      labels: {
        style: {
          colors: ['#000000'],
        },
      },
    },
    {
      opposite: true,
      title: {
        text: 'Sales Orders',
        style: {
          fontWeight: 'bold',
          fontSize: '14px',
          color: '#000000',

        },
      },
      labels: {
        style: {
          colors: ['#000000'],
        },
      },
    },
  ],
  tooltip: {
    shared: true,
    intersect: false,
    theme: 'dark',
  },
};

const areaChart = new ApexCharts(
  document.querySelector('#area-chart'),
  areaChartOptions
);
areaChart.render();
