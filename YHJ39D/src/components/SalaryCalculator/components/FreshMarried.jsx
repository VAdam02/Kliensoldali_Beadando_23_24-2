import React, {useState} from "react";

import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover"


import { format, set } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import PermittedLabel from "@/components/PermitedLabel/PermitedLabel"

const freshMarried = () => {
    const [date, setDate] = useState(null);
    const [toggle, setToggle] = useState(false);

    const [permitted, setPermitted] = useState(false);

    const handleToggle = () => { setToggle(!toggle); }
    const handleDate = (date) => {
        if (date == null) return;

        setDate(date);
        const now = new Date();
        const diff = (now.getFullYear() - date.getFullYear()) * 12 + now.getMonth() - date.getMonth();
        setPermitted(0 < diff && diff <= 24);
    }

    return (
        <div>
        <Switch id="freshMarried" onCheckedChange={handleToggle} disabled={!permitted} /><Label htmlFor="freshMarried">Friss házasok adókedvezménye</Label><br />
        <Popover>
            <PopoverTrigger>Dátum megadása</PopoverTrigger>
            <PopoverContent>
                A kedvezmény először a házasságkötést követő hónapra vehető igénybe és a házassági életközösség ideje alatt legfeljebb 24 hónapon át jár.
                <Popover>
                    <PopoverTrigger asChild>
                        <Button variant={"outline"} className={cn("w-[280px] justify-start text-left font-normal", !date && "text-muted-foreground")}>
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {date ? format(date, "PPP") : <span>Pick a date</span>}
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                        <Calendar mode="single" selected={date} onSelect={handleDate} initialFocus />
                    </PopoverContent>
                </Popover>
            </PopoverContent>
        </Popover>
        <PermittedLabel permitted={permitted} />
        </div>
    );
}

export default freshMarried;