import { Skeleton } from "@mui/material";

export default function Loading() {
    // You can add any UI inside Loading, including a Skeleton.
    return <div className="w-[568px] mx-auto">
        <Skeleton variant="rectangular" width={"100%"} className="min-h-screen" />
    </div>
}