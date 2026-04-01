import { CopilotKit } from "@copilotkit/react-core";

export default function ChatLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <CopilotKit runtimeUrl="/api/copilot">
            {children}
        </CopilotKit>
    );
}
