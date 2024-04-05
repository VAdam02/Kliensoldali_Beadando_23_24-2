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

const freshMarried = ({checked, date, onPermittedChange}) => {
    const [isToggleFreshMarriage, setToggleFreshMarriage] = useState(checked);
    const [marriageDate, setMarriageDate] = useState(date);
    const [permitted, setPermitted] = useState(isToggleFreshMarriage && checkPermitted(marriageDate));

    function checkPermitted(date) {
        if (date == null) return false;

        const now = new Date();
        const diff = (now.getFullYear() - date.getFullYear()) * 12 + now.getMonth() - date.getMonth();
        return 0 < diff && diff <= 24;
    }

    const handleToggle = () => {
        const newIsToggleFreshMarriage = !isToggleFreshMarriage;
        setToggleFreshMarriage(newIsToggleFreshMarriage);
        const newPermitted = newIsToggleFreshMarriage && checkPermitted(marriageDate);
        setPermitted(newPermitted);
        onPermittedChange(newPermitted);
    }

    const handleDate = (date) => {
        setMarriageDate(date);
        let newPermitted = isToggleFreshMarriage && checkPermitted(date);
        setPermitted(newPermitted);
        onPermittedChange(newPermitted);
    }

    return (
        <div>
            <Switch id="freshMarried" onCheckedChange={handleToggle} /><Label htmlFor="freshMarried">Friss házasok adókedvezménye</Label><br />
            {isToggleFreshMarriage && (<div>
                <Popover>
                    <PopoverTrigger>Dátum megadása</PopoverTrigger>
                    <PopoverContent>
                        A kedvezmény először a házasságkötést követő hónapra vehető igénybe és a házassági életközösség ideje alatt legfeljebb 24 hónapon át jár.
                        <Popover>
                            <PopoverTrigger asChild>
                                <Button variant={"outline"} className={cn("w-[280px] justify-start text-left font-normal", !marriageDate && "text-muted-foreground")}>
                                    <CalendarIcon className="mr-2 h-4 w-4" />
                                    {marriageDate ? format(marriageDate, "PPP") : <span>Pick a date</span>}
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0">
                                <Calendar mode="single" selected={marriageDate} onSelect={handleDate} initialFocus />
                            </PopoverContent>
                        </Popover>
                    </PopoverContent>
                </Popover>
                {marriageDate != null && (<PermittedLabel permitted={permitted} />)}
            </div>)}
        </div>
    );
}

export default freshMarried;