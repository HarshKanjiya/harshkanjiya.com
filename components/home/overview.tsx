import { ExternalLinkIcon, FileUserIcon, MapPinIcon, MarsIcon, VenusIcon } from "lucide-react";


import {
    IntroItem,
    IntroItemContent,
    IntroItemIcon,
    IntroItemLink,
} from "@/components/intro-item";
import { JobItem } from "@/components/job-item";
import { Panel, PanelContent } from "@/components/panel";
import { PhoneItem } from "@/components/phone-item";
import { USER } from "@/data/user";
import { EmailItem } from "./email-item";

export default function Overview() {
    return (
        <Panel>
            <h2 className="sr-only">Overview</h2>

            <PanelContent className="space-y-2.5">

                <div className="grid gap-x-12 gap-y-2.5 sm:grid-cols-2">
                    {USER.jobs.map((job, index) => {
                        return (
                            <JobItem
                                key={index}
                                title={job.title}
                                company={job.company}
                                website={job.website}
                            />
                        );
                    })}
                    <IntroItem>
                        <IntroItemIcon>
                            <FileUserIcon />
                        </IntroItemIcon>
                        <IntroItemContent>
                            <IntroItemLink
                                href={USER.resume}
                                aria-label={`Resume: ${USER.resume}`}
                                className="flex gap-2 items-baseline"
                            >
                                Resume <ExternalLinkIcon size={12} />
                            </IntroItemLink>
                        </IntroItemContent>
                    </IntroItem>
                    <IntroItem>
                        <IntroItemIcon>
                            <MapPinIcon />
                        </IntroItemIcon>
                        <IntroItemContent>
                            <IntroItemLink
                                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(USER.address)}`}
                                aria-label={`Location: ${USER.address}`}
                            >
                                {USER.address}
                            </IntroItemLink>
                        </IntroItemContent>
                    </IntroItem>
                    <IntroItem>
                        <IntroItemIcon>
                            {USER.gender === "male" ? <MarsIcon /> : <VenusIcon />}
                        </IntroItemIcon>
                        <IntroItemContent aria-label={`Pronouns: ${USER.pronouns}`}>
                            {USER.pronouns}
                        </IntroItemContent>
                    </IntroItem>

                    <PhoneItem phoneNumber={USER.phoneNumber} />

                    <EmailItem email={USER.email} />

                </div>
            </PanelContent>
        </Panel>
    );
}