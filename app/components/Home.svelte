<page>
    <actionBar title="Home" />
    <gridLayout>
        <canvas on:ready={onCanvasReady} />
    </gridLayout>
</page>

<script lang="ts">
    import 'chart.js/auto';
    import { BasePlatform, BubbleDataPoint, Chart, ChartEvent, ChartTypeRegistry, ScatterDataPoint } from 'chart.js';
    import { NativeScriptPlatform } from './nativescript-platform';


    function onCanvasReady(args) {
        const ctx = args.object.getContext('2d');
        var c = new Chart(ctx, {
            type: 'bar',
            // @ts-ignore
            platform: NativeScriptPlatform,
            data: {
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: [{
                label: '# of Votes',
                data: [1200, 1900, 300, 500, 200, 300],
                borderWidth: 1
            }]
            },
            options: {
            animations: {
                y: {
                duration: 700,
                easing: 'linear'
                }
            },
            scales: {
                y: {
                beginAtZero: true
                }
            }
            }
        });
    }
</script>

<style>
    .info .fas {
        color: #3A53FF;
    }

    .info {
        font-size: 20;
        horizontal-align: center;
        vertical-align: center;
    }
</style>
