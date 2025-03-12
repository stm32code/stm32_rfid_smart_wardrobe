#include "delay.h"
#include "key.h"
#include "sys.h"
#include "usart.h"
#include "uart2.h"
#include "uart3.h"
#include "ds18b20.h"
#include "wifi.h"
#include "gpio.h"
#include "stdio.h"
#include "glr_adc.h"
#include "rc522.h"
#include "bsp_dht11.h"
extern __IO u16 data_value[6];
u32		AD1_value, hy, trq, AD5_value;
/* 温度报警值 */
double			temperatureLimit;
int			flameLimit;
int			gasLimit;
int			smokeLimit;
u8			ds18b20_state;
int			i;
DHT11_Data_TypeDef	dht11_data;
int			dht11_flag;


/**
 *   连线说明：
 *   1--SDA  <----->PA4
 *   2--SCK  <----->PA5
 *   3--MOSI <----->PA7
 *   4--MISO <----->PA6
 *   5--悬空
 *   6--GND <----->GND
 *   7--RST <----->PB0
 *   8--VCC <----->VCC
 **/


void init( void )
{
	DELAY_INIT();                                           /* 初始化时钟 延迟函数使用 */
	NVIC_PriorityGroupConfig( NVIC_PriorityGroup_2 );       /* 设置NVIC中断分组 */
	USART1_INIT( 115200 );                                  /* 串口1初始化 */
	USART2_INIT( 115200 );                                  /* 串口2初始化 */


	ADC_INIT();
	LED1_INIT();                                           
	delay_ms( 10000 );
	ESP_INIT();
}


int main( void )
{
	float	wd	= 0;
	float	sd	= 0;
	float	yw	= 0;
	int	num	= 0;

	u8 p[100] = "";
/*	char	cRes[512]	= ""; */
	init();
	printf( "系统初始化成功\n" );
	GPIO_SetBits( GPIOB, GPIO_Pin_14 );
	GPIO_SetBits( GPIOB, GPIO_Pin_15 );
	delay_ms( 500 );
	GPIO_ResetBits( GPIOB, GPIO_Pin_14 );
	GPIO_ResetBits( GPIOB, GPIO_Pin_15 );
	while ( 1 )
	{
		RC522_Handel();
		 
	}
}


