import { BasePlatform, BubbleDataPoint, Chart, ChartEvent, ChartTypeRegistry, ScatterDataPoint } from "chart.js";

export class NativeScriptPlatform extends BasePlatform {
  acquireContext(item: any) {
      // To prevent canvas fingerprinting, some add-ons undefine the getContext
      // method, for example: https://github.com/kkapsner/CanvasBlocker
      // https://github.com/chartjs/Chart.js/issues/2807
      return item && item.getContext && item.getContext('2d') || null;
  }

  addEventListener(chart: Chart<keyof ChartTypeRegistry, (number | ScatterDataPoint | BubbleDataPoint)[], unknown>, type: string, listener: (e: ChartEvent) => void): void {
      (chart.canvas as any).addEventListener(type, (args: any) => {
      const event: any = {
          type,
          chart,
          native: args,
      };

      if (args.touches) {
          const touch = args.touches.item(0);
          event.x = touch.clientX;
          event.y = touch.clientY;
      }
      listener(event);
      });
  }
}