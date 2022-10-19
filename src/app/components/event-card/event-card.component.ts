import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-event-card",
    templateUrl: "./event-card.component.html",
    styleUrls: ["./event-card.component.scss"],
})
export class EventCardComponent implements OnInit {
    eventList: any = [
        {
            title: "Musical Event",
            subtitle: "10 Ottobre 2022, 21:15",
            date: { month: "Ott", day: "10" },
            parag: {
                title: "Some title",
                text: `Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Amet ratione odit rerum, a sit quidem corporis, eos eum
                      suscipit debitis ducimus et laudantium repellat? Qui
                      deserunt sint fuga optio eligendi?`,
            },
        },
        {
            title: "HipHop Event",
            subtitle: "22 Novembre 2022, 21:15",
            date: { month: "Nov", day: "22" },
            parag: {
                title: "Some title",
                text: `Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Amet ratione odit rerum, a sit quidem corporis, eos eum
                      suscipit debitis ducimus et laudantium repellat? Qui
                      deserunt sint fuga optio eligendi?`,
            },
        },
        {
            title: "Classic Event",
            subtitle: "13 Febbraio 2022, 21:15",
            date: { month: "Feb", day: "13" },
            parag: {
                title: "Some title",
                text: `Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Amet ratione odit rerum, a sit quidem corporis, eos eum
                      suscipit debitis ducimus et laudantium repellat? Qui
                      deserunt sint fuga optio eligendi?`,
            },
        },
        {
            title: "Some Event",
            subtitle: "03 Aprile 2022, 21:15",
            date: { month: "Apr", day: "03" },
            parag: {
                title: "Some title",
                text: `Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Amet ratione odit rerum, a sit quidem corporis, eos eum
                      suscipit debitis ducimus et laudantium repellat? Qui
                      deserunt sint fuga optio eligendi?`,
            },
        },
    ];

    selectedIndex: number = 0;

    constructor() {}

    ngOnInit(): void {}

    selectCard(index: number) {
        this.selectedIndex = index;
        let elmnt = document.getElementById(index.toString());
        elmnt!.scrollIntoView({
            behavior: "smooth",
            block: "center",
            inline: "center",
        });
    }
}
