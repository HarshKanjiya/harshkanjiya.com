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
        <Panel className="screen-line-before screen-line-after">
            <h2 className="sr-only">Overview</h2>
            <div className="flex items-center justify-between flex-1 flex-col h-full overflow-hidden dark:bg-accent/50 shadow-[inset_0_3px_2px_rgba(255,255,255,0.021)] bg-accent">
                <h3 className="w-full py-1.5 px-4 text-muted-foreground text-left">
                    Overview
                </h3>
                <div className="p-0.5 pt-0 flex-1 h-full flex w-full pb-[3px]">
                    <div className="flex-1 px-3 py-2 max-sm:pb-3 flex flex-col bg-background outline rounded-sm outline-muted/50 relative overflow-hidden group w-full">
                        <PanelContent className="space-y-2.5 bg-background w-full p-0 sm:p-4">
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
                            <div className="grid gap-x-12 gap-y-2.5 sm:grid-cols-2">
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
                                {/* <IntroItem>
                                        <IntroItemIcon>
                                            {USER.gender === "male" ? <MarsIcon /> : <VenusIcon />}
                                        </IntroItemIcon>
                                        <IntroItemContent aria-label={`Pronouns: ${USER.pronouns}`}>
                                            {USER.pronouns}
                                        </IntroItemContent>
                                    </IntroItem> */}

                                <PhoneItem phoneNumber={USER.phoneNumber} />

                                <EmailItem email={USER.email} />

                            </div>
                        </PanelContent>
                    </div>
                </div>
            </div>
        </Panel>
    );
}